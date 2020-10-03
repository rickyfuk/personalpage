const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const favicon = require('serve-favicon');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static('public'));
app.use(
	favicon(path.join(__dirname, 'public', 'assets', 'image', 'RFfavicon.jpg'))
);

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html route
app.get('/', (req, res) => {
	res.render('index', { layout: 'landing' });
});

app.get('/aboutme', (req, res) => {
	res.render('aboutme', { layout: 'main' });
});

app.get('/portfolio', (req, res) => {
	res.render('portfolio', { layout: 'main' });
});

app.get('/contact', (req, res) => {
	res.render('contact', { layout: 'main' });
});

// api route
app.post('/send', (req, res) => {
	const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

	console.log(process.env.ACCOUNT);
	console.log(process.env.CLINENTID);
	console.log(process.env.CLINENTSECRET);
	console.log(process.env.REFRESHTOKEN);

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: true,
		auth: {
			type: 'OAuth2',
			user: process.env.ACCOUNT,
			clientId: process.env.CLINENTID,
			clientSecret: process.env.CLINENTSECRET,
			refreshToken: process.env.REFRESHTOKEN,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	// setup email data with unicode symbols
	let mailOptions = {
		from: process.env.ACCOUNT, // sender address
		to: 'digilau@gmail.com', // list of receivers
		subject: 'Portfolio Contact Request', // Subject line
		text: 'New Response', // plain text body
		html: output, // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);

		res.render('contact', { msg: 'Your information has been sent' });
	});
});

app.listen(PORT, function () {
	// Log (server-side) when our server has started
	console.log('Server listening on: http://localhost:' + PORT);
});

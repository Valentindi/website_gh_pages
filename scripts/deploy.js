import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'main',
		repo: 'https://github.com/Valentindi/valentindi.github.io.git',
		user: {
			name: 'Valentin Dittmar',
			email: 'vadittmar@googlemail.com'
		},
		dotfiles: true
	},
	(res) => {
		console.log('Deploy Complete!', res);
	}
);

type LinkPropTypes = {
	text: string;
};

function Link({ text }: LinkPropTypes) {
	const address = 'https://zrozumiecreact.pl';

	return (
		<a
			href={address}
			target='_blank'
			rel='noopener noreferrer'
		>
			{text} {address}
		</a>
	);
}

export default Link;

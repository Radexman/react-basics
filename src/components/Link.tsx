type LinkPropTypes = {
	text?: string;
	shouldOpenNewWindow: boolean;
};

const address = 'https://zrozumiecreact.pl';

function Link(props: LinkPropTypes) {
	const { text = address, shouldOpenNewWindow } = props;

	const target = shouldOpenNewWindow ? '_blank' : '';
	const rel = shouldOpenNewWindow ? 'noopener noreferrer' : '';

	return (
		<a
			href={address}
			target={target}
			rel={rel}
		>
			{text}
		</a>
	);
}

export default Link;

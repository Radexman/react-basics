import ReactDOM from 'react-dom/client';
import Link from './components/Link';

const element = (
	<>
		<h1>Nasza Strona</h1>
		<main>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod odit suscipit cumque sint enim in
				voluptate. Commodi qui repellat illo debitis delectus sequi quasi quod sapiente. Perspiciatis tenetur
				quaerat corrupti perferendis laborum minus libero velit tempora ut modi!
			</p>
			<Link text='Super Strona Kursu' />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod odit suscipit cumque sint enim in
				voluptate. Commodi qui repellat illo debitis delectus sequi quasi quod sapiente. Perspiciatis tenetur
				quaerat corrupti perferendis laborum minus libero velit tempora ut modi!
			</p>
			<Link text='Fajna Strona Kursu' />
		</main>
	</>
);

ReactDOM.createRoot(document.getElementById('root')!).render(element);

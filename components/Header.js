import Link from 'next/link';
export default () => (
	<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
		<Link href="/">
			<h5 className="my-0 mr-md-auto font-weight-normal">
				Next-Express-Bootstrap
			</h5>
		</Link>
		<nav className="my-2 my-md-0 mr-md-3">
			<Link href="/">
				<a className="p-2 text-dark">Home</a>
			</Link>
			<Link href="/about">
				<a className="p-2 text-dark">About</a>
			</Link>
			<a className="p-2 text-dark" href="#">
				Enterprise
			</a>
			<a className="p-2 text-dark" href="#">
				Support
			</a>
			<a className="p-2 text-dark" href="#">
				Pricing
			</a>
		</nav>
		<a className="btn btn-outline-primary" href="#">
			Sign up
		</a>
	</div>
);

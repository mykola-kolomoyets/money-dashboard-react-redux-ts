import { SVGProps } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="27"
		viewBox="0 0 24 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8.57143 1.6875V3.375H15.4286V1.6875C15.4286 0.755684 16.1946 0 17.1429 0C18.0911 0 18.8571 0.755684 18.8571 1.6875V3.375H21.4286C22.8482 3.375 24 4.50826 24 5.90625V8.4375H0V5.90625C0 4.50826 1.15125 3.375 2.57143 3.375H5.14286V1.6875C5.14286 0.755684 5.90893 0 6.85714 0C7.80536 0 8.57143 0.755684 8.57143 1.6875ZM0 10.125H24V24.4688C24 25.8662 22.8482 27 21.4286 27H2.57143C1.15125 27 0 25.8662 0 24.4688V10.125ZM4.28571 13.5C3.81214 13.5 3.42857 13.8797 3.42857 14.3438V17.7188C3.42857 18.1828 3.81214 18.5625 4.28571 18.5625H19.7143C20.1857 18.5625 20.5714 18.1828 20.5714 17.7188V14.3438C20.5714 13.8797 20.1857 13.5 19.7143 13.5H4.28571Z"
			fill="#2D3436"
		/>
	</svg>
);

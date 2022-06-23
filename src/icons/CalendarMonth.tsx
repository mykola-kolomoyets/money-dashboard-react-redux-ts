import { SVGProps } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="28"
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8.57143 1.71429V3.42857H15.4286V1.71429C15.4286 0.767679 16.1946 0 17.1429 0C18.0911 0 18.8571 0.767679 18.8571 1.71429V3.42857H21.4286C22.8482 3.42857 24 4.57982 24 6V8.57143H0V6C0 4.57982 1.15125 3.42857 2.57143 3.42857H5.14286V1.71429C5.14286 0.767679 5.90893 0 6.85714 0C7.80536 0 8.57143 0.767679 8.57143 1.71429ZM0 10.2857H24V24.8571C24 26.2768 22.8482 27.4286 21.4286 27.4286H2.57143C1.15125 27.4286 0 26.2768 0 24.8571V10.2857ZM3.42857 16.2857C3.42857 16.7571 3.81214 17.1429 4.28571 17.1429H6C6.47143 17.1429 6.85714 16.7571 6.85714 16.2857V14.5714C6.85714 14.1 6.47143 13.7143 6 13.7143H4.28571C3.81214 13.7143 3.42857 14.1 3.42857 14.5714V16.2857ZM10.2857 16.2857C10.2857 16.7571 10.6714 17.1429 11.1429 17.1429H12.8571C13.3286 17.1429 13.7143 16.7571 13.7143 16.2857V14.5714C13.7143 14.1 13.3286 13.7143 12.8571 13.7143H11.1429C10.6714 13.7143 10.2857 14.1 10.2857 14.5714V16.2857ZM18 13.7143C17.5286 13.7143 17.1429 14.1 17.1429 14.5714V16.2857C17.1429 16.7571 17.5286 17.1429 18 17.1429H19.7143C20.1857 17.1429 20.5714 16.7571 20.5714 16.2857V14.5714C20.5714 14.1 20.1857 13.7143 19.7143 13.7143H18ZM3.42857 23.1429C3.42857 23.6143 3.81214 24 4.28571 24H6C6.47143 24 6.85714 23.6143 6.85714 23.1429V21.4286C6.85714 20.9571 6.47143 20.5714 6 20.5714H4.28571C3.81214 20.5714 3.42857 20.9571 3.42857 21.4286V23.1429ZM11.1429 20.5714C10.6714 20.5714 10.2857 20.9571 10.2857 21.4286V23.1429C10.2857 23.6143 10.6714 24 11.1429 24H12.8571C13.3286 24 13.7143 23.6143 13.7143 23.1429V21.4286C13.7143 20.9571 13.3286 20.5714 12.8571 20.5714H11.1429ZM17.1429 23.1429C17.1429 23.6143 17.5286 24 18 24H19.7143C20.1857 24 20.5714 23.6143 20.5714 23.1429V21.4286C20.5714 20.9571 20.1857 20.5714 19.7143 20.5714H18C17.5286 20.5714 17.1429 20.9571 17.1429 21.4286V23.1429Z"
			fill="#2D3436"
		/>
	</svg>
);

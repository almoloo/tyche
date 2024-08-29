import React from 'react';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const BuyPage = () => {
	return (
		<div>
			BuyPage
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="amount"
				/>
				<button type="submit">buy</button>
			</form>
		</div>
	);
};

export default BuyPage;

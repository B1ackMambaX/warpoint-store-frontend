interface Bonus {
	id: number;
	bonus: {
		id: number;
		type: 'order' | 'review' | 'category' | 'level' | 'offline';
		action_value: 1;
		bonus_value: 300;
		coin_value: 0;
		item: any;
		img_url: string;
	};
	used: false;
	received: false;
}

export default Bonus;

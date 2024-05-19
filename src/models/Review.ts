interface Review {
    id: number;
    user: {
        fullname: string
    };
    product_id: number;
    star: number;
    text: string;
    created_at: number;
}

export default Review;
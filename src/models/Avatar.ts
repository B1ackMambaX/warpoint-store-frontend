interface Avatar {
    type: 'male' | 'female';
    level_number: number;
    progress: number;
    up_value: number;
    coin: number;
    avatar_img: {
        avatar_type: 'male' | 'female';
        level_number: number;
        img_url: string;
    }
}

export default Avatar;
const getRandom = (min, max, signsCount) => {
    if (min<0 || max<0){
        return 0;
    }
    if ( min > max ) {
        let tmp = min;
        min = max;
        max = tmp;
    }
    const num = Math.random() * (max - min) + min;
    return num.toFixed(signsCount);
};
getRandom(0,0.3,1);

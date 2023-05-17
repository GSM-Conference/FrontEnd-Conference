function solution(rny_string) {
    return rny_string.split('').map((v,i) => v === 'm' ? 'rn' : v).join('');
}
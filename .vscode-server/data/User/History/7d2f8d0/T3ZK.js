const require = require("./require");

const odd = 'CJS 홀수입니다.';
const even = 'CSJ 짝수입니다.';

module.exports = {
    odd,
    even,
    require.main == module
};


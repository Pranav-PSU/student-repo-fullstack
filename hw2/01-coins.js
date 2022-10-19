const pluralize = ({ count, noun, suffix = 's' }) => {
    return `${count} ${noun}${count !== 1 ? suffix : ''} `;
};
const calculateChange = (input) => {
    let coins = [];
    let remainder = 0;

    const dollers = Math.floor(input);
    remainder = input - dollers;
    coins.push({ count: dollers, noun: 'doller' });

    const quarters = Math.floor(remainder / 0.25);
    remainder -= quarters * 0.25;
    coins.push({ count: quarters, noun: 'quarter' });

    const dimes = Math.floor(remainder / 0.1);
    remainder -= dimes * 0.1;
    coins.push({ count: dimes, noun: 'dime' });

    const nickles = Math.floor(remainder / 0.05);
    remainder -= nickles * 0.05;
    coins.push({ count: nickles, noun: 'nikel' });

    const pennies = Math.round(remainder * 100);
    coins.push({ count: pennies, noun: `${pennies == 1 ? 'penny' : 'penn'}`, suffix: 'ies' });

    // console.log(
    //     `${pluralize(dollers, 'doller')}, ${pluralize(quarters, 'quarter')}, ${pluralize(
    //         dimes,
    //         'dime'
    //     )}, ${pluralize(nickles, 'nikel')}, ${pluralize(
    //         pennies,
    //         `${pennies == 1 ? 'penny' : 'penn'}`,
    //         'ies'
    //     )}`
    // );
    let outputString = '';
    coins.forEach((ele) => {
        if (ele.count != 0) outputString += pluralize(ele);
    });
    console.log(outputString);
};
calculateChange(4.87);

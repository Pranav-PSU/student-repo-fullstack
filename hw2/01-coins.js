const pluralize = (count, noun, suffix = 's') => {
    return `${count} ${noun}${count !== 1 ? suffix : ''}`;
};
const calculateChange = (input) => {
    let remainder = 0;

    const dollers = Math.floor(input);
    remainder = input - dollers;

    const quarters = Math.floor(remainder / 0.25);
    remainder -= quarters * 0.25;

    const dimes = Math.floor(remainder / 0.1);
    remainder -= dimes * 0.1;

    const nickles = Math.floor(remainder / 0.05);
    remainder -= nickles * 0.05;

    const pennies = Math.round(remainder * 100);

    console.log(
        `${pluralize(dollers, 'doller')}, ${pluralize(quarters, 'quarter')}, ${pluralize(
            dimes,
            'dime'
        )}, ${pluralize(nickles, 'nikel')}, ${pluralize(
            pennies,
            `${pennies == 1 ? 'penny' : 'penn'}`,
            'ies'
        )}`
    );
};
calculateChange(4.66);

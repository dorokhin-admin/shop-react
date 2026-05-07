const fakePaymentAPI = ({ amount }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: amount > 0,
            });
        }, 1000);
    });
};

export default fakePaymentAPI;
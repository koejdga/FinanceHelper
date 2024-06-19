export const mockNavigation = {
    route: {
        params: {
            screenNumber: 1,
            isIncome: true,
            options: [],
            transaction: {
                id: "test",
                date: 1234,
                dayOfWeek: 3,
                category: "test",
                amount: 5,
                account: "test",
                type: "test",
                note: "test"
            }
        }
    },
    navigation: {
        push: jest.fn(),
        replace: jest.fn(),
        setOptions: jest.fn(),
        navigate: jest.fn()
    }
}
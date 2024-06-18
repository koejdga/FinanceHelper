export const mockNavigation = {
    route: {
        params: {
            screenNumber: 1,
            isIncome: true,
            options: []
        }
    },
    navigation: {
        push: jest.fn(),
        replace: jest.fn(),
        setOptions: jest.fn(),
        navigate: jest.fn()
    }
}
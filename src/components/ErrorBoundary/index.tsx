import { Component, ReactNode } from 'react';

interface Properties {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: null | Error;
}

class ErrorBoundary extends Component<Properties, State> {
    constructor(properties: Properties | Readonly<Properties>) {
        super(properties);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    componentDidCatch(error: Error): void {
        this.setState({
            hasError: true,
            error,
        });
    }

    showText = (): string => {
        if (
            this.state.error &&
            this.state.error.toString() !== 'Error' &&
            this.state.error !== null
        ) {
            return this.state.error.toString();
        }
        return 'Something went wrong';
    };

    render(): React.ReactNode | null {
        if (this.state.hasError) {
            return (
                <section className="py-10 bg-white h-full flex justify-center">
                    <div className="mt-[-50px] flex flex-col items-center justify-center">
                        <h3>An error occurred.</h3>
                        <p>Try refreshing the page</p>
                        <a href="" className="text-white py-2.5 px-5 bg-red-600 my-5 inline-block">
                            Reload
                        </a>
                    </div>
                </section>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

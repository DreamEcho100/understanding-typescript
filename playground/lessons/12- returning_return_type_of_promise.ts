const play = async () => {
	type Greeting = { message: string };

	type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }>
		? Props
		: never;

	const getHelloProps = async () => {
		const greeting: Greeting = { message: 'Hi Friends!' };

		return {
			props: {
				greeting,
				data: {
					cars: ['car1', 'car2'],
				},
			},
		};
	};

	const sayHello = (props: InferHelloProps<typeof getHelloProps>) =>
		console.log(props.greeting);

	const data = await getHelloProps();

	sayHello(data.props);
};

play();

/*
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const play = () => __awaiter(void 0, void 0, void 0, function* () {
    const getHelloProps = () => __awaiter(void 0, void 0, void 0, function* () {
        const greeting = { message: 'Hi Friends!' };
        return {
            props: {
                greeting,
                data: {
                    cars: ['car1', 'car2'],
                },
            },
        };
    });
    const sayHello = (props) => console.log(props.greeting);
    const data = yield getHelloProps();
    sayHello(data.props);
});
play();
*/

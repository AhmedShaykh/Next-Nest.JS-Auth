export function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (!val) {
        throw Error("Expected 'Val' To Be Defined, But Received " + val);
    }
};
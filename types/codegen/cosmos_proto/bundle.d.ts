import * as _2 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _2.ScalarType;
    scalarTypeToJSON(object: _2.ScalarType): string;
    ScalarType: typeof _2.ScalarType;
    ScalarTypeSDKType: typeof _2.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _2.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.InterfaceDescriptor;
        fromPartial(object: Partial<_2.InterfaceDescriptor>): _2.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _2.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ScalarDescriptor;
        fromPartial(object: Partial<_2.ScalarDescriptor>): _2.ScalarDescriptor;
    };
};

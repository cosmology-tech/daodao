import * as _m0 from "protobufjs/minimal";
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */

export interface Metadata {
  /** fee_version defines the ICS29 fee version */
  feeVersion: string;
  /** app_version defines the underlying application version, which may or may not be a JSON encoded bytestring */

  appVersion: string;
}
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */

export interface MetadataSDKType {
  /** fee_version defines the ICS29 fee version */
  fee_version: string;
  /** app_version defines the underlying application version, which may or may not be a JSON encoded bytestring */

  app_version: string;
}

function createBaseMetadata(): Metadata {
  return {
    feeVersion: "",
    appVersion: ""
  };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeVersion !== "") {
      writer.uint32(10).string(message.feeVersion);
    }

    if (message.appVersion !== "") {
      writer.uint32(18).string(message.appVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeVersion = reader.string();
          break;

        case 2:
          message.appVersion = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.feeVersion = object.feeVersion ?? "";
    message.appVersion = object.appVersion ?? "";
    return message;
  }

};
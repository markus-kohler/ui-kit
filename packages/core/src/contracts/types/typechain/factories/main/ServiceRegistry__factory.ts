/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ServiceRegistry,
  ServiceRegistryInterface,
} from "../../main/ServiceRegistry";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_addr",
        type: "address",
      },
    ],
    name: "getServiceURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "targetContractId",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_serviceURI",
        type: "string",
      },
    ],
    name: "setServiceURI",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_controller",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "controller",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_controller",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        name: "serviceURI",
        type: "string",
      },
    ],
    name: "ServiceURIUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "controller",
        type: "address",
      },
    ],
    name: "SetController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "param",
        type: "string",
      },
    ],
    name: "ParameterUpdate",
    type: "event",
  },
];

export class ServiceRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ServiceRegistryInterface {
    return new utils.Interface(_abi) as ServiceRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ServiceRegistry {
    return new Contract(address, _abi, signerOrProvider) as ServiceRegistry;
  }
}
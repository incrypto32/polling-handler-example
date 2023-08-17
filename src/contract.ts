import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { ERC20 } from "../generated/USDC/ERC20";
import { Balance, InitialData } from "../generated/schema";
import { log } from "matchstick-as";

const USDC_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const USER_ADDRESS = "0x28C6c06298d514Db089934071355E5743bf21d60";

export function handleBlock(block: ethereum.Block): void {
  let usdc = ERC20.bind(Address.fromString(USDC_ADDRESS));
  let balance = usdc.balanceOf(Address.fromString(USER_ADDRESS));
  let decimals = usdc.decimals();
  let amount = BigInt.fromI32(10)
    .pow(decimals as u8)
    .times(balance);

  let balanceEntity = new Balance(block.hash);
  balanceEntity.block = block.number;
  balanceEntity.amount = amount;
  balanceEntity.save();
}

export function handleOnce(block: ethereum.Block): void {
  log.info("Initalizing... subgraph", []);
  let data = new InitialData(Bytes.fromUTF8("initial"));
  data.data = "initialization data";
  data.save();
}

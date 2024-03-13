/* Autogenerated file. Edit at your own risk */
import { Chain } from '../core/constants/chains'
import { ProtocolAdapterParams } from '../types/adapter'
import { IProtocolAdapter } from '../types/IProtocolAdapter'
import { AaveV2ATokenPoolAdapter } from './aave-v2/products/a-token/aaveV2ATokenPoolAdapter'
import { AaveV2StableDebtTokenPoolAdapter } from './aave-v2/products/stable-debt-token/aaveV2StableDebtTokenPoolAdapter'
import { AaveV2VariableDebtTokenPoolAdapter } from './aave-v2/products/variable-debt-token/aaveV2VariableDebtTokenPoolAdapter'
import { AaveV3ATokenPoolAdapter } from './aave-v3/products/a-token/aaveV3ATokenPoolAdapter'
import { AaveV3StableDebtTokenPoolAdapter } from './aave-v3/products/stable-debt-token/aaveV3StableDebtTokenPoolAdapter'
import { AaveV3VariableDebtTokenPoolAdapter } from './aave-v3/products/variable-debt-token/aaveV3VariableDebtTokenPoolAdapter'
import { CarbonDeFiStrategiesAdapter } from './carbon-defi/products/strategies/carbonDeFiStrategiesAdapter'
import { ChimpExchangePoolAdapter } from './chimp-exchange/products/pool/chimpExchangePoolAdapter'
import { CompoundV2BorrowMarketAdapter } from './compound-v2/products/borrow-market/compoundV2BorrowMarketAdapter'
import { CompoundV2SupplyMarketAdapter } from './compound-v2/products/supply-market/compoundV2SupplyMarketAdapter'
import { ConvexCvxcrvWrapperAdapter } from './convex/products/cvxcrv-wrapper/convexCvxcrvWrapperAdapter'
import { ConvexPoolAdapter } from './convex/products/pool/convexPoolAdapter'
import { ConvexSidechainStakingAdapter } from './convex/products/sidechain-staking/convexSidechainStakingAdapter'
import { ConvexStakingAdapter } from './convex/products/staking/convexStakingAdapter'
import { CurvePoolAdapter } from './curve/products/pool/curvePoolAdapter'
import { CurveRewardAdapter } from './curve/products/reward/curveRewardAdapter'
import { CurveStakingAdapter } from './curve/products/staking/curveStakingAdapter'
import { FluxBorrowMarketAdapter } from './flux/products/borrow-market/fluxBorrowMarketAdapter'
import { FluxSupplyMarketAdapter } from './flux/products/supply-market/fluxSupplyMarketAdapter'
import { GMXGlpAdapter } from './gmx/products/glp/gmxGlpAdapter'
import { IZiswapAdapter } from './iziswap/products/iziswap/iZiswapAdapter'
import { LidoStEthAdapter } from './lido/products/st-eth/lidoStEthAdapter'
import { LidoWstEthAdapter } from './lido/products/wst-eth/lidoWstEthAdapter'
import { SDaiAdapter } from './maker/products/yield/sDaiAdapter'
import { MendiFinanceBorrowAdapter } from './mendi-finance/products/borrow/mendiFinanceBorrowAdapter'
import { MendiFinanceSupplyAdapter } from './mendi-finance/products/supply/mendiFinanceSupplyAdapter'
import { MorphoAaveV2OptimizerBorrowAdapter } from './morpho-aave-v2/products/optimizer-borrow/morphoAaveV2OptimizerBorrowAdapter'
import { MorphoAaveV2OptimizerSupplyAdapter } from './morpho-aave-v2/products/optimizer-supply/morphoAaveV2OptimizerSupplyAdapter'
import { MorphoAaveV3ETHOptimizerBorrowAdapter } from './morpho-aave-v3-eth/products/optimizer-borrow/morphoAaveV3ETHOptimizerBorrowAdapter'
import { MorphoAaveV3ETHOptimizerSupplyAdapter } from './morpho-aave-v3-eth/products/optimizer-supply/morphoAaveV3ETHOptimizerSupplyAdapter'
import { MorphoCompoundV2OptimizerBorrowAdapter } from './morpho-compound-v2/products/optimizer-borrow/morphoCompoundV2OptimizerBorrowAdapter'
import { MorphoCompoundV2OptimizerSupplyAdapter } from './morpho-compound-v2/products/optimizer-supply/morphoCompoundV2OptimizerSupplyAdapter'
import { PancakeswapV2PoolAdapter } from './pancakeswap-v2/products/pool/pancakeswapV2PoolAdapter'
import { PricesV2UsdAdapter } from './prices-v2/products/usd/pricesV2UsdAdapter'
import { Protocol } from './protocols'
import { QuickswapV2PoolAdapter } from './quickswap-v2/products/pool/quickswapV2PoolAdapter'
import { RocketPoolRethAdapter } from './rocket-pool/products/reth/rocketPoolRethAdapter'
import { StakewiseOsEthAdapter } from './stakewise/products/os-eth/stakewiseOsEthAdapter'
import { StargatePoolAdapter } from './stargate/products/pool/stargatePoolAdapter'
import { StargateVestingAdapter } from './stargate/products/vesting/stargateVestingAdapter'
import { SushiswapV2PoolAdapter } from './sushiswap-v2/products/pool/sushiswapV2PoolAdapter'
import { SwellSwEthAdapter } from './swell/products/sw-eth/swellSwEthAdapter'
import { SyncswapPoolAdapter } from './syncswap/products/pool/syncswapPoolAdapter'
import { UniswapV2PoolAdapter } from './uniswap-v2/products/pool/uniswapV2PoolAdapter'
import { UniswapV3PoolAdapter } from './uniswap-v3/products/pool/uniswapV3PoolAdapter'
import { XfaiDexAdapter } from './xfai/products/dex/xfaiDexAdapter'

export const supportedProtocols: Record<
  Protocol,
  Partial<
    Record<Chain, (new (input: ProtocolAdapterParams) => IProtocolAdapter)[]>
  >
> = {
  [Protocol.MorphoAaveV3ETHOptimizer]: {
    [Chain.Ethereum]: [
      MorphoAaveV3ETHOptimizerSupplyAdapter,
      MorphoAaveV3ETHOptimizerBorrowAdapter,
    ],
  },

  [Protocol.MorphoAaveV2]: {
    [Chain.Ethereum]: [
      MorphoAaveV2OptimizerBorrowAdapter,
      MorphoAaveV2OptimizerSupplyAdapter,
    ],
  },

  [Protocol.MorphoCompoundV2]: {
    [Chain.Ethereum]: [
      MorphoCompoundV2OptimizerSupplyAdapter,
      MorphoCompoundV2OptimizerBorrowAdapter,
    ],
  },

  [Protocol.Stargate]: {
    [Chain.Ethereum]: [StargatePoolAdapter, StargateVestingAdapter],
    [Chain.Arbitrum]: [StargatePoolAdapter, StargateVestingAdapter],
  },

  [Protocol.AaveV2]: {
    [Chain.Ethereum]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV2ATokenPoolAdapter,
      AaveV2StableDebtTokenPoolAdapter,
      AaveV2VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.AaveV3]: {
    [Chain.Ethereum]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Polygon]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Avalanche]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Base]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Arbitrum]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Fantom]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
    [Chain.Optimism]: [
      AaveV3ATokenPoolAdapter,
      AaveV3StableDebtTokenPoolAdapter,
      AaveV3VariableDebtTokenPoolAdapter,
    ],
  },

  [Protocol.UniswapV3]: {
    [Chain.Ethereum]: [UniswapV3PoolAdapter],
    [Chain.Arbitrum]: [UniswapV3PoolAdapter],
    [Chain.Optimism]: [UniswapV3PoolAdapter],
    [Chain.Polygon]: [UniswapV3PoolAdapter],
    [Chain.Bsc]: [UniswapV3PoolAdapter],
    [Chain.Base]: [UniswapV3PoolAdapter],
  },

  [Protocol.Lido]: {
    [Chain.Ethereum]: [LidoStEthAdapter, LidoWstEthAdapter],
  },

  [Protocol.Curve]: {
    [Chain.Ethereum]: [
      CurvePoolAdapter,
      CurveStakingAdapter,
      CurveRewardAdapter,
    ],
    [Chain.Polygon]: [
      CurvePoolAdapter,
      CurveStakingAdapter,
      CurveRewardAdapter,
    ],
    [Chain.Fantom]: [CurvePoolAdapter, CurveStakingAdapter, CurveRewardAdapter],
    [Chain.Arbitrum]: [
      CurvePoolAdapter,
      CurveStakingAdapter,
      CurveRewardAdapter,
    ],
    [Chain.Avalanche]: [
      CurvePoolAdapter,
      CurveStakingAdapter,
      CurveRewardAdapter,
    ],
    [Chain.Optimism]: [
      CurvePoolAdapter,
      CurveStakingAdapter,
      CurveRewardAdapter,
    ],
    [Chain.Base]: [CurvePoolAdapter, CurveStakingAdapter, CurveRewardAdapter],
  },

  [Protocol.Maker]: {
    [Chain.Ethereum]: [SDaiAdapter],
  },

  [Protocol.GMX]: {
    [Chain.Arbitrum]: [GMXGlpAdapter],
    [Chain.Avalanche]: [GMXGlpAdapter],
  },

  [Protocol.Swell]: {
    [Chain.Ethereum]: [SwellSwEthAdapter],
  },

  [Protocol.Convex]: {
    [Chain.Ethereum]: [
      ConvexPoolAdapter,
      ConvexStakingAdapter,
      ConvexCvxcrvWrapperAdapter,
    ],

    [Chain.Polygon]: [ConvexSidechainStakingAdapter],

    [Chain.Arbitrum]: [ConvexSidechainStakingAdapter],
  },

  [Protocol.IZiSwap]: {
    [Chain.Bsc]: [IZiswapAdapter],
    [Chain.Base]: [IZiswapAdapter],
    [Chain.Arbitrum]: [IZiswapAdapter],
    [Chain.Linea]: [IZiswapAdapter],
  },

  [Protocol.ChimpExchange]: {
    [Chain.Linea]: [ChimpExchangePoolAdapter],
  },

  [Protocol.SyncSwap]: {
    [Chain.Linea]: [SyncswapPoolAdapter],
  },

  [Protocol.MendiFinance]: {
    [Chain.Linea]: [MendiFinanceSupplyAdapter, MendiFinanceBorrowAdapter],
  },

  [Protocol.CarbonDeFi]: {
    [Chain.Ethereum]: [CarbonDeFiStrategiesAdapter],
  },

  [Protocol.RocketPool]: {
    [Chain.Ethereum]: [RocketPoolRethAdapter],
  },

  [Protocol.PricesV2]: {
    [Chain.Ethereum]: [PricesV2UsdAdapter],
    [Chain.Polygon]: [PricesV2UsdAdapter],
    [Chain.Arbitrum]: [PricesV2UsdAdapter],
    [Chain.Bsc]: [PricesV2UsdAdapter],
    [Chain.Optimism]: [PricesV2UsdAdapter],
    [Chain.Avalanche]: [PricesV2UsdAdapter],
    [Chain.Base]: [PricesV2UsdAdapter],
  },

  [Protocol.UniswapV2]: {
    [Chain.Ethereum]: [UniswapV2PoolAdapter],
    [Chain.Optimism]: [UniswapV2PoolAdapter],
    [Chain.Bsc]: [UniswapV2PoolAdapter],
    [Chain.Polygon]: [UniswapV2PoolAdapter],
    [Chain.Base]: [UniswapV2PoolAdapter],
    [Chain.Arbitrum]: [UniswapV2PoolAdapter],
    [Chain.Avalanche]: [UniswapV2PoolAdapter],
  },
  [Protocol.SushiswapV2]: {
    [Chain.Ethereum]: [SushiswapV2PoolAdapter],
    [Chain.Bsc]: [SushiswapV2PoolAdapter],
    [Chain.Polygon]: [SushiswapV2PoolAdapter],
    [Chain.Fantom]: [SushiswapV2PoolAdapter],
    [Chain.Base]: [SushiswapV2PoolAdapter],
    [Chain.Arbitrum]: [SushiswapV2PoolAdapter],
    [Chain.Avalanche]: [SushiswapV2PoolAdapter],
  },

  [Protocol.StakeWise]: {
    [Chain.Ethereum]: [StakewiseOsEthAdapter],
  },

  [Protocol.Xfai]: {
    [Chain.Linea]: [XfaiDexAdapter],
  },

  [Protocol.QuickswapV2]: {
    [Chain.Polygon]: [QuickswapV2PoolAdapter],
  },

  [Protocol.PancakeswapV2]: {
    [Chain.Ethereum]: [PancakeswapV2PoolAdapter],
    [Chain.Bsc]: [PancakeswapV2PoolAdapter],
    [Chain.Base]: [PancakeswapV2PoolAdapter],
    [Chain.Arbitrum]: [PancakeswapV2PoolAdapter],
    [Chain.Linea]: [PancakeswapV2PoolAdapter],
  },

  [Protocol.CompoundV2]: {
    [Chain.Ethereum]: [
      CompoundV2SupplyMarketAdapter,
      CompoundV2BorrowMarketAdapter,
    ],
  },

  [Protocol.Flux]: {
    [Chain.Ethereum]: [FluxSupplyMarketAdapter, FluxBorrowMarketAdapter],
  },
}

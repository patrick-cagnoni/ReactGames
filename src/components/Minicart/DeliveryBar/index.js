import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import format from '../../../utils/currencyFormat'
import { FREE_SHIPPING_THRESHOLD } from '../../../constants'

import * as S from './styles'

const DeliveryBar = () => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    targetValue: FREE_SHIPPING_THRESHOLD,
    amountRemain: FREE_SHIPPING_THRESHOLD,
    amountProgress: 0,
  });
  const { targetValue, amountRemain } = deliveryInfo
  const { totalValue: value } = useSelector((state) => state.minicart)

  useEffect(() => {
    const newAmountRemain = targetValue - value
    const amountProgress = (value * 100) / targetValue

    setDeliveryInfo({
      targetValue,
      amountRemain: newAmountRemain,
      amountProgress,
    });
  }, [value, targetValue]);

  return (
    <S.Wrapper>
      <S.Message>
        {amountRemain > 0 ? (
          <>
            Falta pouco para seu frete ser grátis!
          </>
        ) : (
          <>
            Você ganhou <span>Frete Grátis</span>!
          </>
        )}
      </S.Message>
      <S.Info>
        <span>{format(value)}</span>
        <S.Progress>
          <S.ProgressBar style={{ width: `${deliveryInfo.amountProgress}%` }} />
        </S.Progress>
        <span>{format(targetValue)}</span>
      </S.Info>
    </S.Wrapper>
  );
};

export default DeliveryBar;

import { players } from '@/utils/data';
import formatNumber from '@/utils/formatNumber';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Select from '../Select';

import { AvatarUser, Caption, Container, Input, LabelMoney } from './styles';

const ExchangeCardUserReceiver: React.FC<{
  player: TPlayer;
  setPlayer?: (player: TPlayer) => void;
  moneySended: number;
}> = ({ player, moneySended }) => {
  const theme = useTheme();
  const [selectedPlayer, setSelectedPlayer] = useState({
    value: player,
    label: player.name,
  });

  return (
    <Container>
      <AvatarUser src={`https://minotar.net/avatar/alex`} />
      <AvatarUser
        src={`https://minotar.net/avatar/${
          selectedPlayer.value.skin !== player.name
            ? selectedPlayer.value.skin.length === 0
              ? 'alex'
              : selectedPlayer.value.skin
            : player.skin
        }`}
      />
      <fieldset>
        <Caption>Nickname</Caption>
        <Select
          width={384}
          defaultV={selectedPlayer}
          onChange={setSelectedPlayer}
          options={players.map((p) => ({
            value: p,
            label: p.name,
          }))}
          disabled={player.name === 'SMCodes'}
        />
      </fieldset>
      <fieldset
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Caption>À receber</Caption>
        <LabelMoney>$ {formatNumber(moneySended)}</LabelMoney>
      </fieldset>
      <hr />
      <fieldset
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Caption>Total após a transferência</Caption>
        <LabelMoney color={theme.green}>
          ${' '}
          {formatNumber(
            Number(selectedPlayer.value.money) + Number(moneySended || 0),
          )}
        </LabelMoney>
      </fieldset>
    </Container>
  );
};

export default ExchangeCardUserReceiver;

import { players } from "@/utils/data";
import formatNumber from "@/utils/formatNumber";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import Select from "../Select";

import {
  AvatarUser,
  ButtonExchange,
  Caption,
  Container,
  ContainerGridPreset,
  Input,
  ItemPreset,
  LabelMoney,
  Toast,
} from "./styles";

const ExchangeCardUserPayer: React.FC<{
  player: TPlayer;
  setPlayer?: (player: TPlayer) => void;
  setMoneySended: Dispatch<SetStateAction<number>>;
  moneySended: number;
  setSending: Dispatch<SetStateAction<boolean>>;
  sending: boolean;
}> = ({ player, setMoneySended, moneySended, setSending, sending }) => {
  const theme = useTheme();
  const [selectedPlayer, setSelectedPlayer] = useState({
    value: player,
    label: player.name,
  });

  const handleMoneySend = (percental: number) => {
    setMoneySended((player.money / 100) * percental);
  };

  return (
    <Container>
      <AvatarUser src={`https://minotar.net/avatar/alex`} />
      <AvatarUser
        src={`https://minotar.net/avatar/${
          selectedPlayer.value.skin !== player.name
            ? selectedPlayer.value.skin.length === 0
              ? "alex"
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
          disabled={player.name === "SMCodes"}
        />
      </fieldset>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 15,
        }}
      >
        <ContainerGridPreset>
          <ItemPreset onClick={() => handleMoneySend(25)}>
            $ {formatNumber((player.money / 100) * 25)}
          </ItemPreset>
          <ItemPreset onClick={() => handleMoneySend(50)}>
            $ {formatNumber((player.money / 100) * 50)}
          </ItemPreset>
          <ItemPreset onClick={() => handleMoneySend(75)}>
            $ {formatNumber((player.money / 100) * 75)}
          </ItemPreset>
          <ItemPreset onClick={() => handleMoneySend(100)}>
            $ {formatNumber((player.money / 100) * 100)}
          </ItemPreset>
        </ContainerGridPreset>
        <fieldset
          style={{
            flex: 2,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Caption>À enviar</Caption>
          <Input
            placeholder=""
            type="number"
            value={moneySended}
            onChange={(e) => setMoneySended((e as any).target.value)}
            step={1}
            min={0}
          />
        </fieldset>
      </div>
      <hr />
      <fieldset
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Caption>Total após a transferência</Caption>
        <LabelMoney color={theme.red}>
          $ {formatNumber(player.money - moneySended)}
        </LabelMoney>
      </fieldset>
      <ButtonExchange
        onClick={() => {
          setSending(true);
          setTimeout(() => {
            setSending(false);
            toast(
              () => (
                <Toast>
                  🦄 Você enviou <span>$ {formatNumber(moneySended)}</span> com
                  sucesso!
                </Toast>
              ),
              {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              }
            );
          }, 2000);
        }}
      >
        {sending ? "Enviando..." : "Enviar"}
      </ButtonExchange>
    </Container>
  );
};

export default ExchangeCardUserPayer;

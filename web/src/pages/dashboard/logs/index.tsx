import { useEffect, useState } from "react";
import Head from "next/head";

import DashboardMenu from "@/components/DashboardMenu";
import DashboardHeader from "@/components/DashboardHeader";

import { Container, ContainerDash } from "@/styles/dashboard";

import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  CashText,
  ContainerHeader,
  Day,
  DayDateText,
  ListDays,
  MoneyText,
  ResumeDay,
  UserAvatar,
} from "@/styles/dashboard/logs";
import formatNumber from "@/utils/formatNumber";

const Logs: React.FC = () => {
  const player = {
    name: "SMCodes",
    skin: "RIkKaY_",
    money: 5.0435025711562096e22,
  };
  const { data: logs, error } = useSWR(`/api/logs/${player.name}`, fetcher, {
    fallbackData: [],
  });
  const dateNow = new Date(new Date().setHours(0, 0, 0, 0));

  return (
    <>
      <Head>
        <title>Registros - SpetacularNetwork</title>
      </Head>
      <Container>
        <DashboardMenu location="logs" />

        <ContainerDash>
          <DashboardHeader title="Registros de transferências" />

          {error || logs.length === 0 ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Não obtemos nenhum registro até o momento.
              </h2>
            </div>
          ) : (
            <ListDays>
              {Array.from(Array(7).keys()).map((item) => (
                <Day key={item}>
                  <ContainerHeader>
                    <UserAvatar
                      src={`https://minotar.net/avatar/${player.skin}`}
                    />
                    <ResumeDay>
                      <MoneyText>
                        Money ${" "}
                        {formatNumber(
                          Math.floor(Math.random() * 10000000000000000000000)
                        )}
                      </MoneyText>
                      <CashText>
                        Cash ${" "}
                        {formatNumber(
                          Math.floor(Math.random() * 10000000000000000000000)
                        )}
                      </CashText>
                    </ResumeDay>
                  </ContainerHeader>
                  <DayDateText>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(
                        dateNow.getFullYear(),
                        dateNow.getMonth(),
                        dateNow.getDate() - item
                      )
                    )}
                  </DayDateText>
                </Day>
              ))}
            </ListDays>
          )}
        </ContainerDash>
      </Container>
    </>
  );
};

export default Logs;

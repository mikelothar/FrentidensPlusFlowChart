// https://codepen.io/mikelothar/pen/wvjRxNw?editors=0010
const mermaid = document.querySelector(".mermaid");
mermaid.innerHTML = `

flowchart LR

subgraph SignupFlow [Fremtidens Plus]
  SeKurv[Se kurv]
  IsLoggedIn{Er logget ind?}
  PaymentChosen{Betalingsmetode?}
  LogIn[Log ind]
  VaelgBetaling[Vælg betaling]
  OpretBetalingsplan[Opret betalingsplan]
  Kvittering
end

subgraph DIBS
  DibsAddCard[Tilføj kreditkort]
  DibsWithdrawMoney[Træk penge]
end

subgraph RoedKonto[Rød konto]
  RoedKontoOpretKonto[Opret konto]
  RoedKontoLogIn[Log ind]
  RoedKontoAdministrerGemteKort[Administrer gemte kort]
end

subgraph PlusVaelgSpil[PLUS Vælg Selv]
  PlusVaelgSpilOversigt[Oversigt]
end

subgraph MinPlusSide
  MinPlusSideOversigt[Oversigt]
end

%% Gå til oversigt %%
SeKurv & LogIn & VaelgBetaling & OpretBetalingsplan & Kvittering -.-> PlusVaelgSpil

%% Main flow %%
PlusVaelgSpil ==> SeKurv
Kvittering ==> MinPlusSide

%% Signup flow %%
SeKurv ==> IsLoggedIn
LogIn ==> VaelgBetaling
IsLoggedIn ==> |Nej| LogIn
IsLoggedIn ==> |Ja| VaelgBetaling
VaelgBetaling ==> PaymentChosen
PaymentChosen ==> |Kreditkort| OpretBetalingsplan
OpretBetalingsplan ==> DibsWithdrawMoney
DibsWithdrawMoney ==> Kvittering
PaymentChosen ==> |Betalingsservice| Kvittering

%% LogIn flow %%
LogIn -.-> RoedKontoOpretKonto
LogIn <-.-> RoedKontoLogIn

%% Vælg betaling flow %%
VaelgBetaling <-.-> DibsAddCard
VaelgBetaling <-.-> RoedKontoAdministrerGemteKort

%% Gå tilbage %%
LogIn -.-> SeKurv
VaelgBetaling -.-> SeKurv
OpretBetalingsplan-.->VaelgBetaling

`;

import { CreateTgtRank, StudyPartyParam } from '../pages/StudyCalculator';

export type PlusSuccessRateItem = { addRate: number; defaultSuccessRate: number; plus: number; successRate: number };
export type SlotSuccessRateItem = { addRate: number; defaultSuccessRate: number; slot: number; successRate: number };

const CreateDifficultyMap: Record<
  CreateTgtRank,
  { keyValue: number; type: 'PLUS' | 'RUNE'; difficultyValue: number }[]
> = {
  RANK_1: [
    { type: 'PLUS', keyValue: 0, difficultyValue: 30 },
    { type: 'PLUS', keyValue: 1, difficultyValue: 60 },
    { type: 'PLUS', keyValue: 2, difficultyValue: 90 },
    { type: 'PLUS', keyValue: 3, difficultyValue: 120 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 150 },
    { type: 'PLUS', keyValue: 5, difficultyValue: 190 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 240 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 400 },
  ],
  RANK_2: [
    { type: 'PLUS', keyValue: 0, difficultyValue: 140 },
    { type: 'PLUS', keyValue: 1, difficultyValue: 170 },
    { type: 'PLUS', keyValue: 2, difficultyValue: 200 },
    { type: 'PLUS', keyValue: 3, difficultyValue: 230 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 260 },
    { type: 'PLUS', keyValue: 5, difficultyValue: 300 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 350 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 350 },
    { type: 'RUNE', keyValue: 2, difficultyValue: 400 },
  ],
  RANK_3: [
    { type: 'PLUS', keyValue: 0, difficultyValue: 280 },
    { type: 'PLUS', keyValue: 1, difficultyValue: 310 },
    { type: 'PLUS', keyValue: 2, difficultyValue: 340 },
    { type: 'PLUS', keyValue: 3, difficultyValue: 370 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 400 },
    { type: 'PLUS', keyValue: 5, difficultyValue: 440 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 490 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 300 },
    { type: 'RUNE', keyValue: 2, difficultyValue: 350 },
    { type: 'RUNE', keyValue: 3, difficultyValue: 400 },
  ],
  RANK_4: [
    { type: 'PLUS', keyValue: 0, difficultyValue: 440 },
    { type: 'PLUS', keyValue: 1, difficultyValue: 470 },
    { type: 'PLUS', keyValue: 2, difficultyValue: 500 },
    { type: 'PLUS', keyValue: 3, difficultyValue: 530 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 560 },
    { type: 'PLUS', keyValue: 5, difficultyValue: 600 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 650 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 300 },
    { type: 'RUNE', keyValue: 2, difficultyValue: 350 },
    { type: 'RUNE', keyValue: 3, difficultyValue: 500 },
    { type: 'RUNE', keyValue: 4, difficultyValue: 800 },
  ],
  'RANK_1+': [
    { type: 'PLUS', keyValue: 2, difficultyValue: 90 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 120 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 150 },
    { type: 'PLUS', keyValue: 7, difficultyValue: 180 },
    { type: 'PLUS', keyValue: 8, difficultyValue: 210 },
    { type: 'PLUS', keyValue: 9, difficultyValue: 250 },
    { type: 'PLUS', keyValue: 10, difficultyValue: 300 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 350 },
  ],
  'RANK_2+': [
    { type: 'PLUS', keyValue: 2, difficultyValue: 210 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 240 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 270 },
    { type: 'PLUS', keyValue: 7, difficultyValue: 300 },
    { type: 'PLUS', keyValue: 8, difficultyValue: 330 },
    { type: 'PLUS', keyValue: 9, difficultyValue: 370 },
    { type: 'PLUS', keyValue: 10, difficultyValue: 420 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 300 },
    { type: 'RUNE', keyValue: 2, difficultyValue: 350 },
  ],
  'RANK_3+': [
    { type: 'PLUS', keyValue: 2, difficultyValue: 360 },
    { type: 'PLUS', keyValue: 4, difficultyValue: 390 },
    { type: 'PLUS', keyValue: 6, difficultyValue: 420 },
    { type: 'PLUS', keyValue: 7, difficultyValue: 450 },
    { type: 'PLUS', keyValue: 8, difficultyValue: 480 },
    { type: 'PLUS', keyValue: 9, difficultyValue: 520 },
    { type: 'PLUS', keyValue: 10, difficultyValue: 570 },
    { type: 'RUNE', keyValue: 1, difficultyValue: 300 },
    { type: 'RUNE', keyValue: 2, difficultyValue: 300 },
    { type: 'RUNE', keyValue: 3, difficultyValue: 350 },
  ],
};

const trimRate = (rate: number): number => {
  if (rate > 95) {
    return 95;
  } else if (rate < 0) {
    return 0;
  }
  return rate;
};

// 成功率＝（総研究力÷作成難易度）×100＋（リーダーの研究魔法による補正）
const calcSuccessRate = (study: number, difficulty: number): number => {
  return trimRate((study / difficulty) * 100);
};

export const getSpawnRate = (
  result: { plusSuccessRate: PlusSuccessRateItem[]; runeSlotSuccessRate: SlotSuccessRateItem[] },
  plusKey: number,
  runeKey: number
): number => {
  let rate = 1;
  try {
    result.plusSuccessRate.forEach((successRate) => {
      if (successRate.plus > plusKey) {
        rate *= 1 - successRate.successRate / 100;
        throw rate; // as break throw
      }
      rate *= successRate.successRate / 100;
    });
  } catch (newRate) {
    rate = newRate;
  }
  try {
    result.runeSlotSuccessRate.forEach((successRate) => {
      if (successRate.slot > runeKey) {
        rate *= 1 - successRate.successRate / 100;
        throw rate; // as break throw
      }
      rate *= successRate.successRate / 100;
    });
  } catch (newRate) {
    rate = newRate;
  }

  return rate * 100;
};
export const calcSuccessRateMapResult = (
  study: StudyPartyParam,
  tgtRank: CreateTgtRank
): {
  plusSuccessRate: PlusSuccessRateItem[];
  runeSlotSuccessRate: SlotSuccessRateItem[];
  sumSuccessRate: number[];
} => {
  const difficulty = CreateDifficultyMap[tgtRank];
  const plusSuccessRate = difficulty
    .filter((d) => d.type === 'PLUS')
    .map(
      (d): PlusSuccessRateItem => {
        const defaultSuccessRate = calcSuccessRate(study.study, d.difficultyValue);
        const successRate = trimRate(defaultSuccessRate + study.plusPerAdd);
        return {
          addRate: study.plusPerAdd,
          plus: d.keyValue,
          defaultSuccessRate,
          successRate,
        };
      }
    );
  const runeSlotSuccessRate = difficulty
    .filter((d) => d.type === 'RUNE')
    .map(
      (d): SlotSuccessRateItem => {
        const defaultSuccessRate = calcSuccessRate(study.study, d.difficultyValue);
        const successRate = trimRate(defaultSuccessRate + study.runePerAdd);
        return {
          addRate: study.runePerAdd,
          slot: d.keyValue,
          defaultSuccessRate,
          successRate,
        };
      }
    );

  const sumSuccessRate = plusSuccessRate.map((successRate) => {
    return runeSlotSuccessRate
      .map((runeRate) => {
        return getSpawnRate(
          {
            plusSuccessRate,
            runeSlotSuccessRate,
          },
          successRate.plus,
          runeRate.slot
        );
      })
      .reduce((previous, current) => previous + current, 0);
  });

  return { plusSuccessRate, runeSlotSuccessRate, sumSuccessRate };
};

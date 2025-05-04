import { client } from "../src/client";

async function main() {
  // 例えば、User モデルに初期データを投入する例
  await client.user.deleteMany(); // 既存データのクリア（必要に応じて）

  await client.user.create({
    data: {
      id: "28c664a5-3094-4b9f-b902-b667571c1b7a",
      name: "フリーレン",
      Profile: {
        create: {
          nickName: "フリーレン",
          birthdate: "1970-01-01T00:00:00+09:00",
          gender: "WOMAN",
          prefecture: 1,
          caption: "フリーレンのcaption",
          description: "フリーレンのdescription",
        },
      },
    },
  });

  await client.user.create({
    data: {
      name: "ヒンメル",
      Profile: {
        create: {
          nickName: "ヒンメル",
          birthdate: "2000-01-01T00:00:00+09:00",
          gender: "MAN",
          prefecture: 1,
          caption: "ヒンメルのcaption",
          description: "ヒンメルのdescription",
        },
      },
    },
  });

  console.log("シードデータの投入が完了しました。");
}

main()
  .catch((err) => {
    console.error("エラーが発生しました:", err);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });

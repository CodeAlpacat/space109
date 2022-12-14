const WalletsRepository = require("./wallet.repository");
const walletRepository = new WalletsRepository();

class WalletsService {
  async searchWallet(oa) {
    return {
      statusCode: 200,
      responseBody: {
        result: "success",
        data: await walletRepository.searchWallet(oa),
      },
    };
  }

  async checkNickname(nnm) {
    return {
      statusCode: 200,
      responseBody: {
        result: "success",
        data: await walletRepository.checkNickname(nnm),
      },
    };
  }

  async insert(oa, nnm) {
    let result = await walletRepository.insert(oa, nnm);
    if (result == undefined) result = false;

    return {
      statusCode: 200,
      responseBody: {
        result: "success",
        data: result,
      },
    };
  }

  async sellCheck(gallery_id) {
    let result = await walletRepository.sellCheck(gallery_id);
    console.log("result : " + result);
    // if (result == undefined) result = false;
    return {
      statusCode: 200,
      responseBody: {
        result: "success",
        data: result,
      },
    };
  }
}

module.exports = WalletsService;

const connection = require("../../config/connection").promise();

class NftRepository {
  async sellMyNft(toeknId, scale, position, galleryId, oa) {
    const getCategoryId = `(select category_id from gallery where gallery_id = ${galleryId})`;
    const sql = `INSERT INTO SELL(GALLERY_ID, OA,  TOKEN_ID, SCALE, POSITION) 
            VALUES(
                ${galleryId},
                '${oa}',
                '${toeknId}',
                ${scale},
                ${position}
                );`;
    let returnBool = true;
    const result = await connection
      .query(sql)
      .then((data) => data[0])
      .catch((e) => {
        console.error(e);
        returnBool = false;
      });
    console.log(result);
    return returnBool;
    // if (result.length == 1) return true;
    // else return false;
  };

  async updateDisplayInfo(nftId, scale, position){
    // scale, position 둘 다 undefined일경우 무조건 return false를 넣어줘야함
    // typeof str == "undefined" || str == null || str == ""
    /*
    UPDATE 테이블이름
    SET 필드이름1=데이터값1, 필드이름2=데이터값2, ...
    WHERE 필드이름=데이터값
    */
    console.log("nft.NftRepository");
    // console.log(nftId);
    // console.log(scale);
    // console.log(position);
    let sql = ``;
    if( scale != null &&  position == null){
      // scale에 값이 있다.
      console.log("scale에 값이 있다.");
      sql = `UPDATE SELL SET SCALE = ${scale} WHERE NFT_ID = ${nftId}`;
    }
    else if( scale == null &&  position != null){
      // position에 값이 있다.
      console.log("position에 값이 있다.");
      sql = `UPDATE SELL SET POSITION = ${position} WHERE NFT_ID = ${nftId}`;
    }
    else if( scale != null &&  position != null){
      // 둘 다 값이 있다.
      console.log("둘 다 값이 있다.");
      sql = `UPDATE SELL SET SCALE = ${scale}, POSITION = ${position} WHERE NFT_ID = ${nftId}`;
    }
    else{
      // 둘 다 값이 없다.
      console.log("둘 다 값이 없다.");
      return false;
    }
    let returnBool = true;
    const result = await connection
      .query(sql)
      .then((data) => data[0])
      .catch((e) => {
        console.error(e);
        returnBool = false;
      });
    console.log(result);
    return returnBool;
  };
  async getDisplayedNftList(galleryId){
    const sql = `SELECT * FROM SELL WHERE GALLERY_ID = ${galleryId};`;
    let returnBool = true;
    const result=await connection.query(sql)
            .then(data=>data[0])
            .catch((e)=>{
                console.error(e);
            })

            return result;
  };


}
module.exports = NftRepository;

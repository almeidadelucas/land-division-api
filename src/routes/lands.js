const express = require("express");
const landsController = require("../controllers/lands");

const router = express.Router();

//cria uma nova terra no banco de dados
router.post("/", landsController.createNewLand);

router.delete("/:id", landsController.deleteLand);

//atualiza uma terra
router.put("/:id", landsController.updateLand);

//retorna todas terras vazias
router.get("/empty", landsController.listEmptyLands);

//retorna todas terras
router.get("/", landsController.listLands);

// retorna uma terra por id
router.get("/:id", landsController.getLandById);

/*  Retorna a região de uma terra que tem o id passado na url

    Exemplo de retorno:
    {
    "fkRegionLand": {
        "id": 19,
        "name": "Regiao 19",
        "averageTemperature": 19.5,
        "averagePrice": null,
        "annualPrecipitation": 1275,
        "populationSize": 1380,
        "numberSchools": 33,
        "createdAt": "2022-11-10T18:03:12.000Z",
        "updatedAt": "2022-11-10T18:03:12.000Z"
    }
}
*/
router.get("/:id/region", landsController.regionLand);

/*  Retorna a precipitação e a temṕeratura média de uma terra
    que tem o id passado na url.

    Exemplo de retorno:
    {
    "fkRegionLand": {
        "averageTemperature": 19.5,
        "annualPrecipitation": 1275
    }
}
*/
router.get(
	"/:id/precipitationAndTemperature",
	landsController.precipitationAndTemperature
);

module.exports = router;

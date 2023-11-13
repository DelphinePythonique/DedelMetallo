       const button = document.querySelector('#calculer_remise');

        button.addEventListener('click', event => {
            const prixTTCAvantRemise = document.getElementById("prix_ttc_avant_remise").value;
            const pourcentageRemise = document.getElementById("pourcentage_remise").value;
            prixTTCApresRemise = Remise.prixApresRemise(prixTTCAvantRemise,pourcentageRemise)
            document.getElementById("prixTTCApresRemise").textContent = "Le prix TTC après remise est de : " + prixTTCApresRemise + "€"
        });

        class Remise {
            constructor() {
                console.log("calculateur")
            }
            static prixApresRemise(prixTTCAvantRemise, pourcentageRemise){

                const prixTTCAvantRemiseSanitized = parseFloat(prixTTCAvantRemise);
                const pourcentageRemiseSanitized = parseFloat(pourcentageRemise);

                if  (isNaN(prixTTCAvantRemiseSanitized)){
                    return 0;
                }

                if ((pourcentageRemiseSanitized===0) || isNaN(pourcentageRemiseSanitized)){
                    return prixTTCAvantRemiseSanitized;
                }

                let resultat = prixTTCAvantRemiseSanitized*(1-(pourcentageRemiseSanitized/100))

                return  resultat;

            }

        }

        // ttc:200 remise:60 resultat 80
        console.log("test calcul remise:" + (Remise.prixApresRemise(200,60)===80))
        console.log("test calcul remise sur texte €TTC :" + (Remise.prixApresRemise("texte",60)===0))
        console.log("test calcul remise 0 sur 200€TTC:" + (Remise.prixApresRemise(200,0)===200))
        console.log("test calcul remise texte sur 200€TTC:" + (Remise.prixApresRemise(200,"texte")===200))


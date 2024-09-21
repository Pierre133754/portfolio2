export default function ProjetsContent({projet}) {

    return (
        <>
        {projet.first ? <>
            <h2>Projet 3</h2>
            <p>Frontend d'un portfolio fait avec des demandes fetch en javascript natif a une API et des éléments du DOM créés dynamiquement avec javascript</p>
            <p>Les problématiques rencontrées étaient la récupération automatique des données nécessaire a la création des cartes projets, ainsi que la création de cartes projets, résolues a l'aide de fetch javascript natif et de création de nouveaux éléments dans le DOM respectivement</p>
            <p>Compétences développées : Javascript - DOM</p>
            <a href="https://github.com/Pierre133754/OCprojet3" target="_blank">lien vers le projet</a>
        </> : ''}
        {projet.second ? <>
            <h2>Projet 4</h2>
            <p>Optimisation du SEO d'un site de photographie a l'aide de google lightouse, WebAIM wave, optimisations d'images et de scripts, ajouts de meta pour réseaux sociaux et référencement local avec schema.org</p>
            <p>Les problématiques principales étaient la tailles des images du site, ainsi que le référencement local, résolues a l'aide d'outils de compression d'images en ligne et du site schema.org respectivement</p>
            <p>Compétences développées : Lighthouse - SEO</p>
            <a href="https://github.com/Pierre133754/OCprojet4realreal" target="_blank">lien vers le projet</a>
        </> : ''}
        {projet.third ? <>
            <h2>Projet 5</h2>
            <p>Site de location créé avec sass et react en utilisant des components et usestates pour apprendre react et ses technologies principales.</p>
            <p>Les problématiques principales étaient les différentes routes du site, ainsi que l'affichage des différentes données nécessaires, résolues a l'aide de react router et des composants react respectivement</p>
            <p>Compétences développées : React - Sass</p>
            <a href="https://github.com/Pierre133754/OCprojet5" target="_blank">lien vers le projet</a>
        </> : ''}
        {projet.fourth ? <>
            <h2>Projet 6</h2>
            <p>API Backend d'un site de notation de livre, fait avec Nodejs, et mongoDB pour la base de données</p>
            <p>Les problématiques principales étaient la récupération des données nécessaire a l'API et le test périodique du bon fonctionnement de l'API, résolues a l'aide de mongoose et de postman respectivement</p>
            <p>Compétences développées : Nodejs - MongoDB</p>
            <a href="https://github.com/Pierre133754/OCprojet6" target="_blank">lien vers le projet</a>
        </> : ''}
        </>
    )
}
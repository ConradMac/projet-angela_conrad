<?php

namespace App\Controller;

use App\Entity\Picskills;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PicskillsController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    // #[Route('/developpement', name: 'app_developpement')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    // public function services_developpement(): Response
    // {
    //     $titre_seo = 'Chez M.K, nous concevons des site From Scratch';
    //     return $this->render(
    //         'services/developpementWeb.html.twig',
    //         compact('titre_seo')
    //         // "titre_seo" => $titre_seo
    //     );
    // }

    #[Route('/developpement', name: 'app_developpement')]
    public function index(): Response
    {
        $titre_seo = 'Chez M.K, nous concevons des site From Scratch';
        $pic = $this->entityManager->getRepository(Picskills::class)->findAll();
        return $this->render('services/developpementWeb.html.twig', [
            'pic' => $pic,
            'titre_seo' => $titre_seo,
        ]);
    }
}

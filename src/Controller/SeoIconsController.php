<?php

namespace App\Controller;

use App\Entity\SeoIcons;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SeoIconsController extends AbstractController
{

    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    #[Route('/seo', name: 'app_seo')] 
    public function services_seo(): Response
    {
        $titre_seo = 'Nos prestations en SEO';
        $picsSeo = $this->entityManager->getRepository(SeoIcons::class)->findAll();
        return $this->render('services/seo.html.twig', [
            'titre_seo' => $titre_seo,
            'picsSeo' => $picsSeo,
        ]);
    }
}

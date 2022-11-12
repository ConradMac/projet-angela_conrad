<?php

namespace App\Controller;

use App\Entity\Services;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ServicesController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/shopify', name: 'app_shopify')]
    public function index(): Response
    {
        $prixBasic = $this->entityManager
            ->getRepository(Services::class)
            ->findBy(['name' => 'Basic']);
        $prixPremium = $this->entityManager
            ->getRepository(Services::class)
            ->findBy(['name' => 'Premium']);
        $prixAdvanced = $this->entityManager
            ->getRepository(Services::class)
            ->findBy(['name' => 'Advanced']);
        $titre_seo = 'Nos prestations en Shopify';
        return $this->render('services/shopify.html.twig', [
            'prixBasic' => $prixBasic,
            'prixPremium' => $prixPremium,
            'prixAdvanced' => $prixAdvanced,
            'titre_seo' => $titre_seo,
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function index(): Response
    {
        $titre_seo = 'M.K Agency';
        return $this->render(
            'home/index.html.twig',
            compact('titre_seo')
            // "titre_seo" => $titre_seo
        );
    }

    #[Route('/faq', name: 'app_faq')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function question_reponse(): Response
    {
        $titre_seo = 'Nos questions/ Réponses';
        return $this->render('home/faq.html.twig', compact('titre_seo'));
    }

    #[Route('/contact', name: 'app_contact')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function formulaire(): Response
    {
        $titre_seo = 'Nous contacter';
        return $this->render('home/contact.html.twig', compact('titre_seo'));
    }

    #[Route('/equipe', name: 'app_equipe')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function equipe(): Response
    {
        $titre_seo = 'Notre équipe chez M.K';
        return $this->render('home/equipe.html.twig', compact('titre_seo'));
    }

    #[Route('/services', name: 'app_services')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services(): Response
    {
        return $this->render('home/services.html.twig', []);
    }

    #[Route('/seo', name: 'app_seo')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services_seo(): Response
    {
        $titre_seo = 'Nos prestations en SEO';
        return $this->render('services/seo.html.twig', [
            'titre_seo' => $titre_seo,
        ]);
    }

    #[Route('/shopify', name: 'app_shopify')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services_shopify(): Response
    {
        $titre_seo = 'Shopify';
        return $this->render('services/shopify.html.twig', [
            'titre_seo' => $titre_seo,
        ]);
    }
}

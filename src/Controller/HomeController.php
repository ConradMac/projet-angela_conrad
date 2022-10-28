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
        return $this->render('home/index.html.twig', [
            
        ]);
    }

    #[Route('/faq', name: 'app_faq')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function question_reponse(): Response
    {
        return $this->render('home/faq.html.twig', [
            
        ]);
    }

    #[Route('/contact', name: 'app_contact')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function formulaire(): Response
    {
        return $this->render('home/contact.html.twig', [
            
        ]);
    }

    #[Route('/equipe', name: 'app_equipe')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function equipe(): Response
    {
        return $this->render('home/equipe.html.twig', [
            
        ]);
    }

    #[Route('/services', name: 'app_services')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services(): Response
    {
        return $this->render('home/services.html.twig', [
            
        ]);
    }

    #[Route('/seo', name: 'app_seo')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services_seo(): Response
    {
        return $this->render('services/seo.html.twig', [
            
        ]);
    }

    #[Route('/shopify', name: 'app_shopify')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services_shopify(): Response
    {
        return $this->render('services/shopify.html.twig', [
            
        ]);
    }

    #[Route('/developpement', name: 'app_developpement')] // on retire Home pour que la page symfony 6.4.1 soit la page d'accueil
    public function services_developpement(): Response
    {
        return $this->render('services/developpementWeb.html.twig', [
            
        ]);
    }
}


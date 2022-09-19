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
    
}


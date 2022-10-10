<?php

namespace App\Controller;

use App\Entity\Newsletter;
use App\Form\NewsletterType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class NewsletterController extends AbstractController
{
    #[Route('/newsletter', name: 'app_newsletter')]
    public function index(Request $request): Response
    {

    $newsletter = new Newsletter(); // on instancie un nouvel objet Newsletter
    $form = $this->createForm(NewsletterType::class, $newsletter);

    $form->handleRequest($request); // ligne pour recuperer notre requete

        if ($form->isSubmitted() && $form->isValid()) {

        $token = hash('sha256', uniqid()); // création d'un token unique
        $newsletter->setValidationToken($token);
        $newsletter->setEmail($newsletter->getEmail());


        $em = $this->getDoctrine()->getManager();
        $em->persist($newsletter);
        $em->flush();

        $this->addFlash('success', 'Votre inscription a bien été prise en compte');
        return $this->redirectToRoute('app_home');
        }

        return $this->render('newsletter/index.html.twig', [
            'form' => $form->createView(), // on envoie le formulaire à la vue
        ]);
    }

} 
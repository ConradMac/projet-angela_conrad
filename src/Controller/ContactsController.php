<?php

namespace App\Controller;

use App\Entity\Contacts;
use App\Form\ContactsType;
use Symfony\Component\Mime\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactsController extends AbstractController
{
    #[Route('/contact', name: 'app_contacts')]
    public function index(Request $request, EntityManagerInterface $em, MailerInterface $mailer): Response
    
    {
        $contact = new Contacts();
        $form = $this->createForm(ContactsType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contact->setName($contact->getName());
            $contact->setLastName($contact->getLastname());
            $contact->setEmail($contact->getEmail());
            $contact->setSubject($contact->getSubject());
            $contact->setMessage($contact->getMessage());
            $contact->setPhone($contact->getPhone());
            $em->persist($contact);
            $em->flush();
            // use function to get hashed password!
            $this->addFlash('success', 'Votre message a bien été envoyé !');
            // dd($form);

            return $this->redirectToRoute('app_home');

            // Email
            // $email = (new Email())
            // ->from('$contacts->getEmail()')
            // ->to('admin@example.com')
            // //->cc('cc@example.com')
            // //->bcc('bcc@example.com')
            // //->replyTo('fabien@example.com')
            // //->priority(Email::PRIORITY_HIGH)
            // ->subject($contact->getSubject())
            // // ->text('Sending emails is fun again!')
            // ->html($contact->getMessage());

            // $mailer->send($email);

            // $this->addFlash('success', 'Votre message a bien été envoyé !');
        }
        return $this->render('contacts/index.html.twig', [
            'form' => $form->createView(),
        ]);
            
    }
}

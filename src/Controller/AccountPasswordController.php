<?php

namespace App\Controller;

use App\Form\ChangePasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AccountPasswordController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/motdepasse', name: 'app_account_password')]
    public function index(
        Request $request,
        UserPasswordHasherInterface $hasher,
    ): Response {
        $messages = null; // pour afficher les messages d'erreur

        $user = $this->getUser();
        $form = $this->createForm(ChangePasswordType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $old_pwd = $form->get('old_password')->getData();
            if ($hasher->isPasswordValid($user, $old_pwd)) {
                $new_pwd = $form->get('new_password')->getData();
                $user->setPassword($hasher->hashPassword($user, $new_pwd));

                $this->entityManager->persist($user);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'Votre mot de passe a bien été modifié'
                );

                // $messages = 'Votre mot de passe a bien été mis à jour';
            } else {
                $this->addFlash(
                    'danger',
                    'Votre mot de passe actuel n\'est pas correct'
                );
                // $messages = 'Votre mot de passe actuel n\'est pas valide';
            }

            
        }
            $titre_seo = 'Je change mon mot de passe ici';
            return $this->render('account_password/index.html.twig', [
                'changePasswordForm' => $form->createView(),
                'messages' => $messages,
                'titre_seo' => $titre_seo,

            ]);
    }
}

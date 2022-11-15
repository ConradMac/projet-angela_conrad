<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class ChangePasswordType extends AbstractType
{
    public function buildForm(
        FormBuilderInterface $builder,
        array $options
    ): void {
        $builder
            ->add('old_password', PasswordType::class, [
                'label' => 'Ancien mot de passe',
                'mapped' => false,
                'attr' => [
                    'placeholder' =>
                        'Veuillez saisir votre mot de passe actuel',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' =>
                            'Veuillez saisir votre mot de passe actuel',
                    ]),
                ],
            ])
            ->add('new_password', RepeatedType::class, [
                'mapped' => false,
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passe doivent correspondre.',
                'label' => 'Mon nouveau mot de passe',
                'required' => true,
                'first_options' => [
                    'label' => 'Mon nouveau mot de passe',
                    'attr' => [
                        'placeholder' => 'Votre nouveau mot de passe',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmation du nouveau mot de passe',
                    'attr' => [
                        'placeholder' =>
                            'Merci de confirmer votre nouveau mot de passe ',
                    ],
                ],
                'constraints' => [
                    new NotBlank([
                        'message' =>
                            'Merci de bien vouloir saisir un mot de passe',
                    ]),
                    new Regex([
                        'pattern' =>
                            '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
                        'message' =>
                            'Votre mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial',
                    ]),
                    new Length([
                        'min' => 8,
                        'minMessage' =>
                            'Votre mot de passe doit contenir au minimum {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Mettre à jour mon mot de passe',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class, // This is the class of the entity
        ]);
    }
}

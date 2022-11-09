<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastname', TextType::class, [
                'label' => 'Nom',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre nom',   
                    'class' => 'form-control'                
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre nom',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre nom doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre nom ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '^((?:(?:[a-zA-Z]+)(?:-(?:[a-zA-Z]+))+)|(?:[a-zA-Z]+))$^'
                        ,
                        'message' => 'Votre nom ne peut contenir que des lettres',
                    ]),
                ],
            ])
            ->add('firstname', TextType::class, [
                'label' => 'Prénom',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre prénom',   
                    'class' => 'form-control'                
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre prénom',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre prénom doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre prénom ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                       'pattern' => '^((?:(?:[a-zA-Z]+)(?:-(?:[a-zA-Z]+))+)|(?:[a-zA-Z]+))$^'
                        ,
                        'message' => 'Votre prénom ne peut contenir que des lettres',
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre email',    
                    'class' => 'form-control'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre email',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre email doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre email ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                       'pattern' => '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/'
                        ,
                        'message' => 'Votre email ne peut contenir que des lettres',
                    ]),
                ],
            ])
            ->add('phone', TelType::class, [
                'label' => 'Téléphone',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre téléphone',  
                    'class' => 'form-control'                 
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre téléphone',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre téléphone doit faire au moins {{ limit }} caractères',
                        'max' => 20,
                        'maxMessage' => 'Votre téléphone ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^0[1-9]([-. ]?[0-9]{2}){4}$/'
                        ,
                        'message' => 'Votre téléphone ne peut contenir que des chiffres',
                    ]),
                ],
            ])
            ->add('address', TextType::class, [
                'label' => 'Adresse',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre adresse',  
                    'class' => 'form-control'                 
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre adresse',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre adresse doit faire au moins {{ limit }} caractères',
                        'max' => 100,
                        'maxMessage' => 'Votre adresse ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                    'pattern' => '/^[a-zA-Z0-9 ]{1,100}$/'
                        ,
                    'message' => 'Votre adresse ne peut contenir que des lettres',
                     ]),
                ],
            ])
            ->add('zipcode', NumberType::class, [
                'label' => 'Code postal',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre code postal',
                    'class' => 'form-control'
              ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre code postal',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre code postal doit faire au moins {{ limit }} caractères',
                        'max' => 5,
                        'maxMessage' => 'Votre code postal ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^[0-9]{5}$/'
                        ,
                        'message' => 'Votre code postal ne peut contenir que des lettres',
                    ]),
                ],
            ])
            ->add('city', TextType::class, [
                'label' => 'Ville',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre ville',  
                    'class' => 'form-control'                 
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre ville',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre ville doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre ville ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z ]{1,30}$/'
                        ,
                        'message' => 'Votre ville ne peut contenir que des lettres',
                    ]),
                ],
            ])
            ->add('country', CountryType::class, [
                'label' => 'Pays',
                'required' => true,
                'attr' => [
                    'class' => 'form-control'                  
                ],
            ])
            // ->add('password', PasswordType::class, [
            //     'label' => 'Mot de passe',
            //     'required' => true,
            //     'attr' => [
            //         'placeholder' => 'Votre mot de passe', 
            //         'class' => 'form-control'
            //     ],
            //     'constraints' => [
            //         new NotBlank([
            //             'message' => 'Veuillez renseigner votre mot de passe',
            //         ]),
            //         new Length([
            //             'min' => 2,
            //             'minMessage' => 'Votre mot de passe doit faire au moins {{ limit }} caractères',
            //             'max' => 50,
            //             'maxMessage' => 'Votre mot de passe ne peut pas faire plus de {{ limit }} caractères',
            //         ]),
            //         new Regex([
            //             'pattern' => '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
            //             ,
            //             'message' => 'Votre mot de passe ne peut contenir que des lettres',
            //         ]),
            //     ],
            // ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'You should agree to our terms.',
                    ]),
                ],
            ])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9]+$/i'
                        ,
                       'message' => 'Votre mot de passe ne peut contenir que des lettres',
                     ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}

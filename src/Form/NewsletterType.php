<?php

namespace App\Form;

use App\Entity\Newsletter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class NewsletterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class
            , [
                'label' => 'Votre adresse email',
                'attr' => [
                    'placeholder' => 'Entrez votre adresse email'
                ]
            ])

            // ->add('created_at') la date va se mettre toute seule
            ->add('is_rgpd', CheckboxType::class, [
                'constraints' => [ 
                    new IsTrue([
                        'message' => 'Acceptez la collecte des données'
                    ])
                ],
                'label' => 'J\'accepte la collecte des données'
            ])
            // ->add('validation_token')
            // ->add('is_valid')
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Newsletter::class,
        ]);
    }
}

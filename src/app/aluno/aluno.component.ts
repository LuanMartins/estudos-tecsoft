import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { Aluno } from './Aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  public dadosAlunos: Array<any>;
  public aluno: Aluno = new Aluno();
  constructor(private servicoAluno: AlunosService) {
    // passando os dados de aluno para a visão do componente
    servicoAluno.getAlunos().subscribe((data: any) => this.dadosAlunos = data);
    
    
   }

  ngOnInit() {
  }

  public mostrarValor(){

    console.log(this.aluno.name);
  }

  public criarAluno(){

    
    
    this.servicoAluno.CreateAlunos(this.aluno).subscribe(

      res =>{
        console.log(res);
      },

      err =>{
        console.log(err)
      }
    )

  }

}
